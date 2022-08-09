import "./Button.css";

type Props = {
  fn: () => any;
  txt: string;
};

export const Button = ({ txt, fn }: Props) => {
  return (
    <button className="button-component" onClick={fn}>
      {txt}
    </button>
  );
};
