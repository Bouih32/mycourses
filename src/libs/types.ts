import { StaticImageData } from "next/image";

export type DataType = {
  cover: StaticImageData;
  title: string;
};

export type InstructorType = {
  cover: StaticImageData;
  name: string;
  job: string;
};
