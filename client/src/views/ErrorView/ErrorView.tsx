import React from "react";

// import errorAnimation from "../../theme/animations/error-animation.json";
import styles from "./ErrorView.module.scss";

export interface ErrorViewProps {
  error: Error | string;
  title?: string;
}

export const ErrorView: React.FC<ErrorViewProps> = ({ error, title }) => {
  return <div>{title}</div>;
};
