import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Expenses from "../expenses";
import Invoice from "../invoice";
import Invoices from "../invoices";
import MainPage from "../dashboard";
import Register from "../register";
import SampleLogin from "../sampleLogin";
import DashboardPage from "../dashboard";



export default function RoutePage() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SampleLogin />} />
                <Route path="expenses" element={<Expenses />} />
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="invoices" element={<Invoices />}>
                    <Route path=":invoiceId" element={<Invoice/>} />
                </Route>
                <Route path="register" element={<Register />} />
                <Route path="login" element={<SampleLogin />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </BrowserRouter>


    );
}