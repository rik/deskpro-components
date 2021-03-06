import React from 'react';
import PropTypes from 'prop-types';

class Label extends React.PureComponent {
  static propTypes = {
    htmlFor:  PropTypes.string,
    required: PropTypes.bool,
    children: PropTypes.node,
  };

  render() {
    const { children, required, htmlFor, ...elementProps } = this.props;
    return (
      <label
        className="dp-input__label"
        htmlFor={htmlFor}
        {...elementProps}
      >
        {children}
        {required ? '*' : ''}
      </label>
    );
  }
}
export default Label;
