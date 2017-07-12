import React from 'react';
import PropTypes from 'prop-types';
// import SVGInline from 'react-svg-inline';
import classNames from 'classnames';
import newId from 'Components/utils/newid';
import { objectKeyFilter } from 'Components/utils/objects';
import Icon from 'Components/Icon';
// import LoadingSvg from 'styles/images/input_loading.svg';
// import ValidatedSvg from 'styles/images/tick.svg';

class Input extends React.Component {
  static propTypes = {
    children:   PropTypes.node,
    className:  PropTypes.string,
    label:      PropTypes.string,
    id:         PropTypes.string,
    icon:       PropTypes.string,
    prefix:     PropTypes.string,
    suffix:     PropTypes.string,
    validated:  PropTypes.bool,
    validating: PropTypes.bool,
    disabled:   PropTypes.bool,
    readonly:   PropTypes.bool,
    required:   PropTypes.bool,
    onChange:   PropTypes.func,
    onFocus:    PropTypes.func,
    onBlur:     PropTypes.func,
  };
  static defaultProps = {
    onChange() {},
    onFocus() {},
    onBlur() {},
  };

  constructor(props) {
    super(props);
    this.state = {
      focus: false
    };
  }

  componentWillMount() {
    if (this.props.id) {
      this.id = this.props.id;
    } else {
      this.id = newId();
    }
  }

  onChange = (event) => {
    this.props.onChange(event.currentTarget.value || '');
  };

  onFocus = (e) => {
    this.setState({
      focus: true
    });
    this.props.onFocus(e);
  };

  onBlur = (e) => {
    this.setState({
      focus: false
    });
    this.props.onBlur(e);
  };

  getIcon = () => {
    const { icon } = this.props;
    if (!icon) {
      return null;
    }
    return <Icon name={icon} />;
  };

  getPrefix = () => {
    const { prefix } = this.props;
    if (!prefix) {
      return null;
    }
    return <div className="dp-input__prefix">{prefix}</div>;
  };

  getSuffix = () => {
    const { suffix } = this.props;
    if (!suffix) {
      return null;
    }
    return <div className="dp-input__suffix">{suffix}</div>;
  };

  focus = () => {
    this.input.focus();
  };

  render() {
    const { className, validated, validating, icon, prefix, suffix, ...props } = this.props;
    return (
      <div
        className={
          classNames(
            'dp-input',
            className,
            {
              'dp-input--validating':  validating,
              'dp-input--validated':   validated,
              'dp-input--with-icon':   icon,
              'dp-input--with-prefix': prefix,
              'dp-input--with-suffix': suffix,
              'dp-input--focused':     this.state.focus,
            }
          )
        }
      >
        {this.getPrefix()}
        {this.getIcon()}
        <input
          id={this.id}
          ref={(c) => { this.input = c; }}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          {...objectKeyFilter(props, Input.propTypes)}
        />
        {/* { validating ? <SVGInline className="dp-input__icon" svg={LoadingSvg} /> : '' }*/}
        {/* { validated ? <SVGInline className="dp-input__icon" svg={ValidatedSvg} /> : '' }*/}
        {this.getSuffix()}
      </div>
    );
  }
}
export default Input;
