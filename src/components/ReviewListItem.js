import React from 'react';
import { ListItem as BaseListItem, Left, Text } from 'native-base';

const ReviewListItem = ({single}) => {
    return (
      <BaseListItem>
        <Left>
          <Text style={{fontSize: 30}}>{single}</Text>
        </Left>
      </BaseListItem>
    );
}

export default ReviewListItem;
