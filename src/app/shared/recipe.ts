import { AuthError } from "@angular/fire/auth";
import * as internal from "stream";

export interface Recipe {
  $key: string;
  name: string;
  description: string;
  ingredients: Ingredient[];
  video: Video;
  author: Author;
}

export interface Video {
  name: string;
  link: string;
}

export interface Ingredient{
  name: string;
  quantity: number;
  type: string;
}

export interface Author{
  name: string;
  professional: boolean;
}
