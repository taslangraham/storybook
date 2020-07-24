
import Vue from "vue";
import { Component, Prop, } from 'vue-property-decorator';
import { Constructor } from 'vue/types/options';
import { ComponentOptions, set, VueConstructor } from 'vue/types/umd';
import { Func } from 'mocha';

const storySafe = new WeakMap<object, { story: StoryOptions; props: StoryPropStore }>();
let props: StoryPropStore = {};

interface StoryOptions {
  description: string;
  module?: ((componentName: string) => string) | string;
  slots?: { [key: string]: string };
  playground?: boolean;
  api?: boolean;
}

interface StoryPropOptions {
  values?: string[];
  description: string;
}

interface StoryPropStore { [key: string]: StoryPropOptions; }

export interface StoryDef {
  (): unknown;
  title?: string;
}

export function Story<V extends Vue>(options: StoryOptions & ThisType<V>)
  : <VC extends object = Vue>(target: VC) => VC {
  return (target) => {
    storySafe.set(target, { story: options, props: { ...props } });

    // Reset so next Story doesn't end up with these props.
    props = {};

    return target;
  };
}

export function StoryProp<V>(options: StoryPropOptions & ThisType<V>)
  : <VC extends object>(target: VC, key: string) => void {
  return (target, key: string) => {
    props[key] = options;
  };
}

Story.getDescription = function <V extends object>(target: V) {
  return storySafe.get(target)?.story.description;
};

Story.getSlots = function <V extends object>(target: V) {
  const slots = storySafe.get(target)?.story?.slots ?? {};

  return Object.entries(slots)
    .map(p => ({ name: p[0], description: p[1] }));
};

Story.getModule = function <V extends object>(target: V) {
  return storySafe.get(target)?.story.module;
};

Story.getPlaygroundEnabled = function <V extends object>(target: V) {
  return storySafe.get(target)?.story.playground !== false;
};

Story.getApiEnabled = function <V extends object>(target: V) {
  return storySafe.get(target)?.story.api !== false;
};

Story.isDefined = function <V extends object>(target: V) {
  return storySafe.has(target);
};

StoryProp.getDescription = function <V extends object>(target: V, propName: string) {
  return storySafe.get(target)?.props[propName]?.description;
};

StoryProp.isDefined = function <V extends object>(target: V, propName: string) {
  return propName in (storySafe.get(target)?.props ?? {});

};

StoryProp.getValues = function <V extends object>(target: V, propName: string) {
  return storySafe.get(target)?.props[propName]?.values;
};



export function StoryComponent(story: StoryOptions, compDetails: ComponentOptions<Vue>) {
  const compDecor = Component(compDetails)
  const storyDec = Story(story);

  return function (target: VueConstructor<Vue>) {
    return storyDec(compDecor(target))
  }

}