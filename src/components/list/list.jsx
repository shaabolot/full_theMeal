import 'react';
const List = ({items, renderItem}) => {
    return <> {items.map(renderItem)} </>;
};

export default List;