import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AuthContext } from '../../providers/AuthProvider';

const PaymentHistory = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: payments, refetch } = useQuery({
    queryKey: ['payments', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/payments/${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table m-5 w-11/12 mx-auto text-center">
          {/* head */}
          <thead>
            <tr className="text-base">
              <th>#</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Transaction ID</th>
            </tr>
          </thead>
          {payments?.map((singlePayment, index) => {
            refetch();
            return (
              <tbody key={singlePayment._id}>
                {/* row 1 */}
                <tr>
                  <th>{index + 1}</th>

                  <td>
                    <div className="font-bold">{singlePayment?.className} </div>
                  </td>
                  <td>{singlePayment?.price} </td>
                  <td>{singlePayment?.transactionId} </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
