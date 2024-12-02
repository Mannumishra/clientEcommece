import React, { useEffect, useState } from 'react';
import './Dashboard.css'; // Importing custom CSS
import moneys from '../../images/money-bag.png'
import userss from '../../images/group.png'
import contacts from '../../images/contacts.png'
import Newsletters from '../../images/newsletter.png'
import orders from '../../images/order-now.png'
import banners from '../../images/slider.png'
import products from '../../images/cubes.png'
import customers from '../../images/rating.png'
import categorys from '../../images/market-segment.png'
import axios from 'axios';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const [product, setProduct] = useState([]);
  const [totalSales, setTotalSales] = useState(0); // Added state for total sales
  const [pendingmoney, setPendingmoney] = useState(0); // Added state for pending money
  const [codmode, setCodmode] = useState([]);
  const [netbanking, setNetbanking] = useState([]);
  const [users, setUsers] = useState([]);
  const [contact, setContact] = useState([]);
  const [newsletter, setNewsletter] = useState([]);
  const [order, setOrder] = useState([]);
  const [banner, setBanner] = useState([]);
  const [category, setCategory] = useState([]);

  const getBanner = async () => {
    try {
      const res = await axios.get("https://hapsserver.onrender.com/api/banner");
      setBanner(res.data.data);
    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred');
    }
  };

  const getProduct = async () => {
    try {
      const res = await axios.get("https://hapsserver.onrender.com/api/product");
      setProduct(res.data.data);
    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred');
    }
  };

  const getOrder = async () => {
    try {
      const res = await axios.get("https://hapsserver.onrender.com/api/checkout");
      const orderData = res.data.data;
      setOrder(orderData);
      const codfilter = orderData.filter((x) => x.paymentmode === "COD");
      setCodmode(codfilter);
      const NetBankingfilter = orderData.filter((x) => x.paymentmode === "NetBanking");
      setNetbanking(NetBankingfilter);
      const totalSalesAmount = orderData.reduce((sum, item) => sum + item.total, 0);
      setTotalSales(totalSalesAmount);
      const pendingAmount = codfilter.reduce((sum, item) => sum + item.total, 0);
      setPendingmoney(pendingAmount);
    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred');
    }
  };

  const getnewsletter = async () => {
    try {
      const res = await axios.get("https://hapsserver.onrender.com/api/newsletter");
      setNewsletter(res.data.data);
    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred');
    }
  };

  const getcategory = async () => {
    try {
      const res = await axios.get("https://hapsserver.onrender.com/api/category");
      setCategory(res.data.data);
    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred');
    }
  };

  const getcontact = async () => {
    try {
      const res = await axios.get("https://hapsserver.onrender.com/api/contact");
      setContact(res.data.data);
    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred');
    }
  };

  const getusers = async () => {
    try {
      const res = await axios.get("https://hapsserver.onrender.com/api/user");
      setUsers(res.data.data);
    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred');
    }
  };

  useEffect(() => {
    getBanner();
    getProduct();
    getOrder();
    getcategory();
    getusers();
    getcontact();
    getnewsletter();
  }, []);

  return (
    <div className="dashboard-container">
      <section className="content">
        <div className="row">
          <div className="card overview-card">
            <h2>Overview</h2>
            <div className="card-content">
              <div className="stat">
                <img src={moneys} alt="" style={{ height: 80 }} />
                <h6>Total Sales</h6>
                <h3>&#8377;{totalSales}</h3>
              </div>
              <div className="stat">
                <img src={moneys} alt="" style={{ height: 80 }} />
                <h6>Pending Amount</h6>
                <h3>&#8377;{pendingmoney}</h3>
              </div>
              <div className="stat">
                <img src={orders} alt="" style={{ height: 80 }} />
                <h6>Orders</h6>
                <h3>{order.length}</h3>
              </div>
              <div className="stat">
                <img src={customers} alt="" style={{ height: 80 }} />
                <h6>Customers</h6>
                <h3>{users.length}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row cardrow">
          <div className="card card-pro">
            <img src={products} alt="" style={{ height: 80 }} />
            <h4>Products</h4>
            <h4>{product.length}</h4>
          </div>
          <div className="card card-pro">
            <img src={orders} alt="" style={{ height: 80 }} />
            <h4>Orders</h4>
            <h4>{order.length}</h4>
          </div>
          <div className="card card-pro">
            <img src={contacts} alt="" style={{ height: 80 }} />
            <h4>Contact Inquiry</h4>
            <h4>{contact.length}</h4>
          </div>
          <div className="card card-pro">
            <img src={banners} alt="" style={{ height: 80 }} />
            <h4>Banners</h4>
            <h4>{banner.length}</h4>
          </div>
          <div className="card card-pro">
            <img src={Newsletters} alt="" style={{ height: 80 }} />
            <h4>Newsletter</h4>
            <h4>{newsletter.length}</h4>
          </div>
          <div className="card card-pro">
            <img src={userss} alt="" style={{ height: 80 }} />
            <h4>Users</h4>
            <h4>{users.length}</h4>
          </div>
          <div className="card card-pro">
            <img src={categorys} alt="" style={{ height: 80 }} />
            <h4>Category</h4>
            <h4>{category.length}</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
