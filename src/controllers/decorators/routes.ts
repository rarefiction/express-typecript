import "reflect-metadata";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";
import { RequestHandler } from "express";

interface RouteHanderDescriptor extends PropertyDescriptor {
  value?: RequestHandler
}

function RouteBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: RouteHanderDescriptor) {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.method, method, target, key);
    };
  };
}

export const get = RouteBinder(Methods.get);
export const put = RouteBinder(Methods.put);
export const post = RouteBinder(Methods.post);
export const del = RouteBinder(Methods.del);
export const patch = RouteBinder(Methods.patch);
