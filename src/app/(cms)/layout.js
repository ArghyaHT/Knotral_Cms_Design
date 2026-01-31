import CMSLayoutServer from "./layout.server";

export default function Layout({ children }) {
  return <CMSLayoutServer>{children}</CMSLayoutServer>;
}