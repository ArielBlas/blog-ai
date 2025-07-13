import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

interface AppContextType {
  token: string | null;
  setToken: (token: string | null) => void;
  blogs: unknown[];
  setBlogs: (blogs: unknown[]) => void;
  input: string;
  setInput: (input: string) => void;
  navigate: ReturnType<typeof useNavigate>;
}

const AppContext = createContext<AppContextType>({
  token: null,
  setToken: () => {},
  blogs: [],
  setBlogs: () => {},
  input: "",
  setInput: () => {},
  navigate: () => {},
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState<string | null>(null);
  const [blogs, setBlogs] = useState([]);
  const [input, setInput] = useState("");

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get("/api/blogs/all");
      if (data.success) {
        setBlogs(data.blogs);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchBlogs();
    const token = localStorage.getItem("token")!;
    if (token) {
      setToken(token);
      axios.defaults.headers.common["Authorization"] = `${token}`;
    }
  }, []);

  const value = {
    token,
    setToken,
    blogs,
    setBlogs,
    input,
    setInput,
    navigate,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
