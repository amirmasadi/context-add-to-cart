import Header from "./Header";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function Layout({ children }: Props) {
  return (
    <section className="max-w-5xl m-auto">
      <Header />

      {children}
    </section>
  );
}
