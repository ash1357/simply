import React, { CSSProperties } from 'react';

export const Row = (props: any) => {
  const rowStyle: CSSProperties = {
    height: props.height || 'auto',
    width: props.width || '100%',
    backgroundColor: props.color || 'transparent',
    flexDirection: props.reverse ? 'row-reverse' : 'row',
    justifyContent: props.mainAxisAlignment || 'flex-start',
    alignItems: props.crossAxisAlignment || 'flex-start',
    ...props.style,
  };
  return (
    <div
      style={{
        display: 'flex',
        ...rowStyle,
      }}
    >
      {props.children}
    </div>
  );
};

export const Grid = (props: any) => {
  const gridStyle: CSSProperties = {
    height: props.height || 'auto',
    width: props.width || '100%',
    backgroundColor: props.color || 'transparent',
    flexDirection: props.reverse ? 'row-reverse' : 'row',
    flexWrap: 'wrap',
    justifyContent: props.mainAxisAlignment || 'flex-start',
    alignItems: props.crossAxisAlignment || 'flex-start',
    ...props.style,
  };
  return (
    <div
      style={{
        display: 'flex',
        ...gridStyle,
      }}
    >
      {props.children}
    </div>
  );
};
