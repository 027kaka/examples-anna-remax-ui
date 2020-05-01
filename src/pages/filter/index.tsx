import React, { useRef } from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import { Dropdown, Filter, Tag } from '@/components';
import Block from '@/common/block';
import styles from './index.module.scss';

const { CheckableTag } = Tag;

const options = [{
  key: '0',
  value: '装饰片'
}, {
  key: '1',
  value: '织带'
}, {
  key: '2',
  value: '缝纫线'
}, {
  key: '3',
  value: '花边'
}, {
  key: '4',
  value: '珠钻'
}]

const options1 = [{
  key: '0',
  value: '1000'
}, {
  key: '1',
  value: '2000'
}, {
  key: '2',
  value: '3000'
}]

export default () => {

  const moreRef = useRef<any>();
  const [value, setValue] = React.useState("0");
  const [value1, setValue1] = React.useState("0");
  const [value2, setValue2] = React.useState("0");
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [checked4, setChecked4] = React.useState(false);


  const handleComplete = () => {
    moreRef.current.toggle();
  }

  const handleReset = () => {
    setChecked1(false);
    setChecked2(false);
    setChecked3(false);
    setChecked4(false);
  }

  return (
    <View className={styles.app}>
      <Block title="Basic">
        <View className={styles.container}>
        <Filter style={{zIndex: 5}}>
          <Filter.Item
            label="品类"
            value={value}
            options={options}
            onChange={(e) => setValue(e.key)}
          />
          <Filter.Item
            label="价格"
            value={value1}
            options={options1}
            onChange={(e) => setValue1(e.key)}
          />
        </Filter>
        </View>
      </Block>
      <Block title="Custom">
        <View className={styles.container}>
        <Filter style={{zIndex: 4}}>
          <Filter.Item
            label="品类"
            value={value2}
            options={options}
            onChange={(e) => setValue2(e.key)}
          />
          <Filter.Item
            label="更多"
            ref={moreRef}
          >
            <View className={styles.custom}>
              <View className={styles.tags}>
                <View className={styles.tag}>
                  <View className={styles.title}>品质</View>
                  <CheckableTag
                    checked={checked1}
                    onChange={(v) => setChecked1(v)}
                  >
                    大众优选
                  </CheckableTag>
                  <CheckableTag
                    checked={checked2}
                    onChange={(v) => setChecked2(v)}
                  >
                    点评高分
                  </CheckableTag>
                </View>
                <View className={styles.tag}>
                  <View className={styles.title}>速度</View>
                  <CheckableTag
                    checked={checked3}
                    onChange={() => setChecked3(v => !v)}
                  >
                    60分钟内
                  </CheckableTag>
                  <CheckableTag
                    checked={checked4}
                    onChange={() => setChecked4(v => !v)}
                  >
                    40分钟内
                  </CheckableTag>
                </View>
              </View>
              <View className={styles.action}>
                <View
                  className={classNames({
                    [styles.btn]: true,
                    [styles.reset]: true,
                  })}
                  onTap={handleReset}
                >
                  重置
                </View>
                <View
                  className={classNames({
                    [styles.btn]: true,
                    [styles.complete]: true,
                  })}
                  onTap={handleComplete}
                >
                  完成
                </View>
              </View>
            </View>
            
          </Filter.Item>
        </Filter>
        </View>
      </Block>
      <Block title="ActiveColor">
        <View className={styles.container}>
        <Filter style={{zIndex: 3}}>
          <Filter.Item
            label="品类"
            value={value}
            options={options}
            onChange={(e) => setValue(e.key)}
            activeColor="#FF9999"
          />
          <Filter.Item
            label="价格"
            value={value1}
            options={options1}
            onChange={(e) => setValue1(e.key)}
            activeColor="#FF9999"
          />
        </Filter>
        </View>
      </Block>
      <Block title="Disabled">
        <View className={styles.container}>
        <Filter style={{zIndex: 2}}>
          <Filter.Item
            label="品类"
            value={value}
            options={options}
            onChange={(e) => setValue(e.key)}
            disabled
          />
          <Filter.Item
            label="价格"
            value={value1}
            options={options1}
            onChange={(e) => setValue1(e.key)}
            disabled
          />
        </Filter>
        </View>
      </Block>
    </View>
  );
};
