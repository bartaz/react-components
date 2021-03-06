import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

export enum ICONS {
  plus = "plus",
  minus = "minus",
  expand = "expand",
  collapse = "collapse",
  spinner = "spinner",
  drag = "drag",
  close = "close",
  help = "help",
  information = "information",
  delete = "delete",
  externalLink = "external-link",
  contextualMenu = "contextual-menu",
  menu = "menu",
  code = "code",
  copy = "copy",
  search = "search",
  share = "share",
  user = "user",
  anchor = "anchor",
  success = "success",
  warning = "warning",
  error = "error",
}

type Props = {
  className?: string;
  name: ICONS | string;
};

/**
 * Icon
 *
 * @param name One of built-in Vanilla icons or a name of a custom icon that follows `p-icon--{name}` convention.
 * @returns Icon
 */
const Icon = ({ className, name }: Props): JSX.Element => (
  <i className={classNames(className, `p-icon--${name}`)} />
);

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Icon;
