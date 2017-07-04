import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { childrenComponentType } from 'Components/utils/props';
import { Drawers } from 'Components/Columns';

/**
 * A navigation column containing expandable drawers.
 */
export default class Column extends React.Component {
  static propTypes = {
    /**
     * CSS classes to apply to the element.
     */
    className: PropTypes.string,
    /**
     * The aria role.
     */
    role: PropTypes.string,
    /**
     * One or more ColumnDrawer components.
     */
    children: childrenComponentType(Drawers)
  };

  static defaultProps = {
    role: "tree"
  };

  render() {
    const {
      children,
      className,
      role,
      ...props
    } = this.props;

    return (
      <div className={classNames('dp-column', className)} role={role} {...props}>
        {children}
      </div>
    );
  }
}

