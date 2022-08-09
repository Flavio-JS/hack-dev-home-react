import "./Button.css";

type Props = {
  fn: () => any;
  txt: string;
  classes?: string;
};

export const Button = ({ fn, txt, classes }: Props) => {
  return (
    <button className={`button-component ${classes}`} onClick={fn}>
      {txt}
    </button>
  );
};
