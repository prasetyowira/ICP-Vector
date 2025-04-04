import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { AuthProvider } from './store/AuthContext';
import KnowledgeBasePage from './pages/KnowledgeBasePage';
import SignInPage from './pages/SignInPage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import PublicRoute from './components/auth/PublicRoute';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Protected Route */}
            <Route 
              path="/knowledge" 
              element={
                <ProtectedRoute>
                  <KnowledgeBasePage />
                </ProtectedRoute>
              } 
            />
            
            {/* Public Route */}
            <Route 
              path="/signin" 
              element={
                <PublicRoute>
                  <SignInPage />
                </PublicRoute>
              } 
            />

            <Route 
              path="/" 
              element={<LandingPage />} 
            />
            
            {/* Default redirect */}
            <Route path="*" element={<SignInPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
}

export default App; 