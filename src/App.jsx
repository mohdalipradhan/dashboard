import { AppProvidersWrapper, BackToTop } from "./components";
import DashBoard from "./app/admin/dashboard/page"
import { AdminLayout } from "./layouts";
import "@/assets/css/style.css";


const App = () => {
  return (
    <AppProvidersWrapper>
      <BackToTop />
      <AdminLayout><DashBoard /></AdminLayout>
    </AppProvidersWrapper>
  );
};

export default App;
