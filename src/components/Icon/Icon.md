Icons let you easily render some of our icons. Pass in the `name` prop to specify which one.

The icon definition file is in `components/Icons/icons.js`

```
<Icon name="checkmark" />
```

_Available Icons:_

```javascript noeditor
const icons = require('./icons').map;
const IconList = () => (
  <Table.Small
    headers={
      <Table.Row>
        <Table.Header>Icon</Table.Header>
        <Table.Header>Name</Table.Header>
      </Table.Row>
    }
  >
    {Object.keys(icons).map(icon => (
      <Table.Row key={icon}>
        <Table.Cell>
          <Icon name={icon} />
        </Table.Cell>
        <Table.Cell>{icon}</Table.Cell>
      </Table.Row>
    ))}
  </Table.Small>
);

<IconList />;
```
