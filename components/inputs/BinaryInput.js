import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import generateId from '../../extensions/generateId';

const Container = styled.div`
  line-height: 1.5em;
  padding-top: 0.4em;
  margin: auto;
  height: 100%;
`;

class BinaryInput extends React.Component {
  static propTypes = {
    input: PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
      onChange: PropTypes.func,
      disabled: PropTypes.bool,
    }),
    label: PropTypes.string,
    id: PropTypes.string,

    Input: PropTypes.func.isRequired,
    Label: PropTypes.func.isRequired,
  };

  static defaultProps = {
    input: {
      value: 'false',
    },
    label: null,
    id: null,
  };

  handleClick = () => {
    this.props.input.onChange(!this.props.input.value);
  };

  render() {
    const { label, input: { value, disabled }, Input, Label } = this.props;
    let id = this.props.id;

    if (!id) {
      /*
        because this generation happens at render time,
        the id is not reliable. developers should specify an id through
        props if they want a reliable id.
      */
      id = generateId('toggle');
    }

    return (
      <Container>
        <Input id={id} type="checkbox" value={value} disabled={disabled} onClick={this.handleClick} />
        <Label htmlFor={id} active={value}>
          {label}
        </Label>
      </Container>
    );
  }
}

BinaryInput.usage = `
# BinaryInput

This is really more of a base class for inputs which switch between two values (see: Toggle and Checkbox).

Props:

* \`input\`: supplied by Redux Form's Field component, you can also specify this manually. Should contain \`value\` and \`onChange\` at least.
* \`label\`: a renderable label to go above the component
* \`helpText\`: some text to be rendered below the component
* \`disabled\`: disables the component
* \`required\`: adds a required mark and HTML field validation
`;

export default BinaryInput;