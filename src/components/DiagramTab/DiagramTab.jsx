// import { useDispatch } from 'react-redux';
import { Chart } from 'components/Chart/Chart';
import { Table } from 'components/Table/Table';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCategories } from 'redux/finance/financeOperations';
import { refreshUser } from 'redux/session/sessionOperations';
import { colors } from '../../constants/colors';

export const DiagramTab = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <>
      <div>I'm DIAGRAM TAB</div>
      <Chart />
      <Table colors={colors} />
    </>
  );
};
