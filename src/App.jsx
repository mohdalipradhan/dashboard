import { AppProvidersWrapper, BackToTop } from "./components";
// import { configureFakeBackend } from "@/common";
import DashBoard from "./app/admin/dashboard/page"
import { AdminLayout } from "./layouts";



// styles
import "@/assets/css/style.css";

// configureFakeBackend();

const App = () => {
  return (
    <AppProvidersWrapper>
      <BackToTop />
      <AdminLayout><DashBoard /></AdminLayout>
    </AppProvidersWrapper>
  );
};

export default App;
