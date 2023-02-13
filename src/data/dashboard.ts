const dashboardLang = [
    {
      lang: "en",
      ordersTable: [
        {
          tableDate: "Date",
          tablePrice: "Price",
          tableStatus: "Status",
        },
      ],
      select: [
        {
          nonPaid: "NON-PAID",
          paid: "PAID",
          declined: "DECLINED",
          inProgress: "IN PROGRESS",
          finished: "FINISHED",
        },
      ],
      buttonsUsersList: [
        {
          users: "Users",
          sellers: "Sellers",
        },
      ],
      usersTable: [
        {
          email: "Email",
          id: "Id",
        },
      ],
    },
    {
      lang: "ru",
      ordersTable: [
        {
          tableDate: "Дата",
          tablePrice: "Цена",
          tableStatus: "Статус",
        },
      ],
      select: [
        {
          nonPaid: "НЕ ОПЛАЧЕНО",
          paid: "ОПЛАЧЕНО",
          declined: "ОТМЕНЕНО",
          inProgress: "ВЫПОЛНЯЕТСЯ",
          finished: "ЗАВЕРШЕН",
        },
      ],
      buttonsUsersList: [
        {
          users: "Покупатели",
          sellers: "Продавцы",
        },
      ],
      usersTable: [
        {
          email: "Почта",
          id: "Идент.",
        },
      ],
    },
  ];

  export default dashboardLang;
  