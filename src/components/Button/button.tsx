import React from 'react';
// import { tuple } from '../util/type';

// export interface BaseButtonProps {
//   type?: ButtonType;
//   children?: React.ReactNode;
// }

// interface ButtonProps {
//   type:
// }

const InternalButton: React.FC<{}> = (props) => {
  console.log(props);
  // const {type} = props;

  return (
    <div>
      <span>button</span>
    </div>
  );
};

const Button = InternalButton;

Button.displayName = 'Button';

export default Button;
