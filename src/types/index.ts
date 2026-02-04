import type { Component } from "svelte";

export type MarkdownProject = {
  metadata: {
    title: string;
    imgUrl?: string;
    publishedAt: string;
    summary: string;
  };
  default: Component;

}

export type Notes = {
  metadata: {
    title: string;
    imgUrl?: string;
    publishedAt: string;
  };
  default: Component;
}

export type BreadcrumbItem = {
  label: string;
  href: string;
};
