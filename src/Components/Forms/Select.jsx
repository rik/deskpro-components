import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import classNames from 'classnames';
import Icon from 'Components/Icon';

class Select extends React.Component {
  static propTypes = {
    /**
     * CSS classes to apply to the element.
     */
    className:   PropTypes.string,
    /**
     * Displayed in the drop down before a value is entered.
     */
    placeholder: PropTypes.string,
    /**
     * Icon to display to the left of the text.
     */
    icon:        PropTypes.string,
    /**
     * Called when the selected value changes.
     */
    onChange:    PropTypes.func,
    /**
     * Array of values to
     */
    options:     PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.oneOfType([
          PropTypes.string.isRequired,
          PropTypes.number.isRequired,
        ]),
      })
    ).isRequired,
  };
  static defaultProps = {
    placeholder: 'Please select',
    multiple:    false,
    icon:        '',
    className:   '',
    onChange() {},
  };

  getIcon = () => {
    const { icon } = this.props;
    if (!icon) {
      return null;
    }
    return <Icon name={icon} />;
  };

  handleChange = (value) => {
    this.props.onChange(value);
  };

  render() {
    const { icon, className, ...elementProps } = this.props;
    const props = Object.assign({}, elementProps);
    delete props.onChange;
    return (
      <div
        className={
          classNames(
            'dp-select',
            className,
            {
              'dp-input--with-icon': icon
            }
          )
      }
      >
        {this.getIcon()}
        <ReactSelect
          className={classNames('dp-select', className)}
          onChange={this.handleChange}
          {...props}
        />
      </div>
    );
  }
}
export default Select;
