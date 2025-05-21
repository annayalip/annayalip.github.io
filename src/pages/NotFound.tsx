
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-pizza-gray">
      <div className="text-center px-4">
        <div className="text-9xl font-bold text-pizza-red">404</div>
        <h1 className="text-2xl md:text-4xl font-bold mb-6">Страница не найдена</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Упс! Кажется, вы пытаетесь найти страницу, которой не существует.
        </p>
        <Button asChild className="bg-pizza-red hover:bg-orange-600 transition-colors">
          <Link to="/">Вернуться на главную</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
