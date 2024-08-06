import Image from "next/image";
import FlowerImg from "../imgs/flower.jpg";

export default function Home() {
  return (
    <>
      <h1>Red flower</h1>
      {/* fill property to get the relative div specified width and height */}
      {/* placeholder blur to load larger size images with blur effect and then full image shown.
      Doesn't work on external URL */}
      <Image placeholder="blur" width={500} height={500} src={FlowerImg} alt="flower" />

      {/* External image */}
      <Image width="500" height="500" src="https://unsplash.com/photos/the-sun-is-setting-behind-the-eiffel-tower--x01rgNps9w" alt="eiffel"/>
    </>
  );
}
