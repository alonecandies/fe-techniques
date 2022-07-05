import { useCallback, useEffect, useMemo, useState } from "react";
import "react-virtualized/styles.css";
import { faker } from "@faker-js/faker";
import {
  AutoSizer,
  List,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";

function App() {
  const recordCount = 1000;
  const [record, setRecord] = useState([]);
  const createRecord = useCallback((count) => {
    let record = [];
    for (let i = 0; i < count; i++) {
      record.push({
        username: faker.internet.userName(),
        email: faker.internet.email(),
      });
    }
    return record;
  }, []);

  const measurerCache = useMemo(
    () =>
      new CellMeasurerCache({
        fixedWidth: true,
        defaultHeight: 94,
      }),
    []
  );

  const rowRenderer = useCallback(
    ({ index, style, parent }) => {
      return (
        <CellMeasurer
          parent={parent}
          rowIndex={index}
          columnIndex={0}
          cache={measurerCache}
        >
          <div style={style}>
            <div>{record[index].username}</div>
            <div>{record[index].email}</div>
          </div>
        </CellMeasurer>
      );
    },
    [measurerCache, record]
  );

  useEffect(() => {
    setRecord(createRecord(recordCount));
  }, [createRecord]);

  return (
    <div
      className="App"
      style={{
        maxHeight: "500px",
        height: record.length * 100,
        overflow: "hidden",
        width: "500px",
      }}
    >
      <AutoSizer>
        {({ width, height }) => {
          return (
            <List
              height={height}
              width={width}
              rowCount={record.length}
              rowHeight={measurerCache.rowHeight}
              rowRenderer={rowRenderer}
              deferredMeasurementCache={measurerCache}
            />
          );
        }}
      </AutoSizer>
    </div>
  );
}

export default App;
