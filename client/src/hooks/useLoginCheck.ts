import { useEffect } from "react";
import { userStore } from "../state/global";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { API_ROUTES } from "../lib/api";
import api from "../lib/axios/axios";

async function getMe() {
  const res = await api.get(API_ROUTES.AUTH.ME);
  return res.data;
}

export default function useCheckLogin() {
  const { token } = userStore();
  const navigate = useNavigate();

  const meMutation = useMutation({
    mutationFn: getMe,
    onSuccess: () => {
      console.log("User is logged in");
      window.location.reload();
    },
    onError: () => {
      navigate('/login');
    }
  })

  useEffect(() => {
    console.log("Checking login");
    if (!token) {
      navigate('/login');
    } else {
      meMutation.mutate();
    }
  }, []);
}