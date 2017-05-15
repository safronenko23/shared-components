import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const ListItemContainer = styled.li`
  background: ${({ active, theme }) => active ? theme.colors.gutter : theme.colors.white};
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.black};
  padding: ${({ theme }) => `${theme.padding.medium} ${theme.padding.large}`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
  position: relative;
  overflow-x: visible;
`;

const ListLabel = styled.h3`
  text-transform: ${({ theme }) => theme.listItem.textTransform};
  font-weight: ${({ theme }) => theme.listItem.fontWeight};
  margin: 0;
`;

const ListDetails = styled.div``;

class ListItem extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    details: PropTypes.node,
    active: PropTypes.bool,
  };

  static defaultProps = {
    label: null,
    details: null,
    active: false,
  };

  render() {
    const { label, details, active } = this.props;

    return (
      <ListItemContainer active={active}>
        <ListLabel>{label}</ListLabel>
        <ListDetails>{details}</ListDetails>
      </ListItemContainer>
    );
  }
}

ListItem.usage = `
# ListItem

Renders a list item component. Use it inside a List for optimal effect.

Props:

* \`label\`: the main content
* \`details\`: some extra info to render below the label
* \`active\`: determines whether the item should render as active or not

TODO: refactor this to use Card.

\`\`\`
<ListItem label="hi" active={true} />
\`\`\`
`;

export default ListItem;
