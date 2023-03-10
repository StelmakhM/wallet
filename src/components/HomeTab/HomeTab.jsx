import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';
import {
  getCategories,
  getTransactions,
} from 'redux/finance/financeOperations';
import { selectIsModalOpen } from 'redux/selectors';
import { selectTransactions } from 'redux/selectors';
import Pagination from './Pagination/Pagination';
import MobileHomeTab from './MobileHomeTab';
import TransactionTableRow from './TransactionTableRow';
import useResize from '../../hooks/useResize';
import css from './HomeTab.module.scss';

const PER_PAGE = 5;

export const HomeTab = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);
  const isModalOpen = useSelector(selectIsModalOpen);

  const windowWidth = useResize();

  useEffect(() => {
    dispatch(getTransactions());
    dispatch(getCategories());
  }, [dispatch]);

  const [pageNum, setPageNum] = useState(1);

  const tranSactionToRender = () => {
    return transactions
      .slice(pageNum * PER_PAGE - PER_PAGE, pageNum * PER_PAGE)
      .sort((a, b) => b.transactionDate.localeCompare(a.transactionDate));
  };

  const pageQtt = Math.ceil(transactions.length / Number(PER_PAGE));

  return (
    <>
      <section>
        {windowWidth < 768 ? (
          <ul className={css.mobileHomeTab}>
            {tranSactionToRender().map(transaction => (
              <MobileHomeTab key={transaction.id} transaction={transaction} />
            ))}
          </ul>
        ) : (
          <div className={css.tableWrapper}>
            <div className={css.tableHeaderWrapper}>
              <table className={css.table}>
                <thead>
                  <tr className={css.tableHead}>
                    <th className={css.thDate}>Date</th>
                    <th className={css.thType}>Type</th>
                    <th className={css.thCategory}>Category</th>
                    <th className={css.thComment}>Comment</th>
                    <th className={css.thSum}>Sum</th>
                    <th className={css.thBalance}>Balance</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className={css.tableRawsWrapper}>
              <table className={css.table}>
                <tbody>
                  {Array.isArray(tranSactionToRender()) &&
                    tranSactionToRender().map(transaction => (
                      <TransactionTableRow
                        key={transaction?.id}
                        transaction={transaction}
                      />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {transactions.length > 7 && (
          <Pagination
            pageQtt={pageQtt}
            pageNum={pageNum}
            setPageNum={setPageNum}
          />
        )}
      </section>
      {isModalOpen && <ModalAddTransaction />}
      <ButtonAddTransactions />
    </>
  );
};
