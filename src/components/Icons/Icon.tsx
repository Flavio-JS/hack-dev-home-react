type Props = {
  icon: string;
  fn?: () => any;
};

export const Icon = ({ icon, fn }: Props) => {
  return <i className={`fa-solid ${icon}`} onClick={fn}></i>;
};
