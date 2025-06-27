import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, Lock, Mail, User } from 'lucide-react';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const RegisterPage = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    console.log('Registration attempt with:', { name, email, password });
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200' />
      <AnimatePresence>
        <motion.div
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          initial={{ opacity: 0, marginTop: 100 }}
          animate={{ opacity: 1, marginTop: 0 }}
          exit={{ opacity: 0, marginTop: 100 }}
          className='w-full max-w-md z-10'
        >
          <Card className='w-full max-w-md z-10 bg-white shadow-xl'>
            <CardHeader className='space-y-1 text-center'>
              <div className='flex justify-center mb-4'>
                <div
                  className='w-16 h-16 bg-primary rounded-full flex items-center justify-center'
                  role='img'
                  aria-label='Company logo'
                >
                  <svg
                    className='w-8 h-8 text-primary-foreground'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                    />
                  </svg>
                </div>
              </div>
              <CardTitle className='text-2xl font-semibold text-gray-800'>
                Создайте аккаунт
              </CardTitle>
              <CardDescription className='text-gray-600'>
                Зарегистрируйтесь для того чтобы начать работу
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className='space-y-4'>
                <div className='space-y-2'>
                  <Label htmlFor='login' className='text-sm font-medium text-gray-700'>
                    Логин
                  </Label>
                  <div className='relative'>
                    <User
                      className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
                      size={18}
                    />
                    <Input
                      id='login'
                      type='text'
                      placeholder='Введите логин'
                      value={login}
                      onChange={(e) => setLogin(e.target.value)}
                      required
                      className='pl-10 bg-gray-50 border-gray-300 text-gray-900 focus:ring-primary focus:border-primary'
                    />
                  </div>
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='email' className='text-sm font-medium text-gray-700'>
                    Email
                  </Label>
                  <div className='relative'>
                    <Mail
                      className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
                      size={18}
                    />
                    <Input
                      id='email'
                      type='email'
                      placeholder='Введите ваш email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className='pl-10 bg-gray-50 border-gray-300 text-gray-900 focus:ring-primary focus:border-primary'
                    />
                  </div>
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='password' className='text-sm font-medium text-gray-700'>
                    Пароль
                  </Label>
                  <div className='relative'>
                    <Lock
                      className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
                      size={18}
                    />
                    <Input
                      id='password'
                      type='password'
                      placeholder='Придумайте пароль'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className='pl-10 bg-gray-50 border-gray-300 text-gray-900 focus:ring-primary focus:border-primary'
                    />
                  </div>
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='confirmPassword' className='text-sm font-medium text-gray-700'>
                    Подтвеждение пароля
                  </Label>
                  <div className='relative'>
                    <Lock
                      className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
                      size={18}
                    />
                    <Input
                      id='confirmPassword'
                      type='password'
                      placeholder='Повторите ваш пороль'
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className='pl-10 bg-gray-50 border-gray-300 text-gray-900 focus:ring-primary focus:border-primary'
                    />
                  </div>
                </div>
                {error && (
                  <Alert variant='destructive' className='bg-red-50 border-red-200 text-red-800'>
                    <AlertCircle className='h-4 w-4' />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
              </CardContent>
              <CardFooter className='flex flex-col space-y-4'>
                <Button
                  type='submit'
                  className='w-full bg-primary hover:bg-primary/90 text-primary-foreground transition duration-300 ease-in-out'
                >
                  Создать
                </Button>
                <div className='text-center'>
                  <span className='text-sm text-gray-600'>Уже есть аккаунт? </span>
                  <Link to='/'>
                    <a className='text-sm text-primary hover:underline transition duration-300 ease-in-out'>
                      Войти
                    </a>
                  </Link>
                </div>
              </CardFooter>
            </form>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
