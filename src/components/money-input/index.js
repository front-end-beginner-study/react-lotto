import React from 'react';
import Input from '../../utils/input';
class MoneyInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <Input
          customClass='money-input'
          min='1000'
          max='1000000'
          placeholder='구입 금액을 입력해주세요.'
        />
        <button>구입하기</button>
      </form>
    );
  }
}

export default MoneyInput;
