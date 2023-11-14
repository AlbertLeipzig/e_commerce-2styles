const userData = {
  firstName: '',
  lastName: '',
  email: '',
  address: '',
};

export const AccountPage = () => {
  const { firstName, lastName, email, address } = userData;
  return (
    <div className="account-page">
      <h2>
        Welcome {firstName} {lastName}
      </h2>
      <aside>
        <ul>
          Manage My Account
          <ul>
            <li>My Profile</li>
            <li>Address Book</li>
            <li>My Payment Options</li>
          </ul>
          <ul>
            My Orders
            <ul>
              <li>My Returns</li>
              <li>My Cancellations</li>
            </ul>
          </ul>
          <li>Manage My Account</li>
        </ul>
      </aside>
      <form action="">
        <h2>Edit Your Profile</h2>
        <label htmlFor="">
          First Name
          <input type="text" placeholder={firstName} />
        </label>
        <label htmlFor="">
          Last Name
          <input type="text" placeholder={lastName} />
        </label>
        <label htmlFor="">
          Email
          <input type="text" placeholder={email} />
        </label>
        <label htmlFor="">
          Address
          <input type="text" placeholder={address} />
        </label>
        <label htmlFor="">
          Password Changes
          <input type="text" placeholder="Current Password" />
          <input type="text" placeholder="New Password" />
          <input type="text" placeholder="Confirm New Password" />
        </label>
        <button>Cancel</button>
        <button>Save Changes</button>
      </form>
    </div>
  );
};
