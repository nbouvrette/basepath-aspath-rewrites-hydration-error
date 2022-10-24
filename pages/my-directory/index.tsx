import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";

const Page: NextPage = () => {
  const router = useRouter();
  const firstPathSegment = router.asPath.split("/")[1];
  return (
    <>
      <div id="first-path-segment">First path segment: {firstPathSegment}</div>
    </>
  );
};

export default Page;
