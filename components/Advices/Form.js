import { useForm } from 'react-hook-form';
import {
  Text,
  Input,
  Stack,
  Button,
  Heading,
  InputGroup,
  InputRightElement,
  useColorModeValue
} from '@chakra-ui/react';

import { Github, Google } from '@/styles/icons';
import { supabase, loginWith3rdParty } from '@/lib/supabase';
import { addAdvice } from '@/lib/advices';

export default function AdviceForm() {
  const bgCard = useColorModeValue('gray.50', 'blackAlpha.50');
  const secondaryText = useColorModeValue('gray.700', 'gray.300');

  const user = supabase.auth.user();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    await addAdvice(values.message, user);
    reset();
  });

  return (
    <Stack p={6} my={6} bgColor={bgCard} borderWidth="2px" rounded="md" spacing={4}>
      <Heading fontSize="2xl">👏 Surprise me!</Heading>
      <Text color={secondaryText} my={2}>
        Tinggalkan pesan apa saja yang menurut kamu pantas.
      </Text>

      {user ? (
        <InputGroup as="form" onSubmit={onSubmit} mt={4}>
          <Input
            required
            pr="4.6rem"
            variant="filled"
            autoComplete="off"
            placeholder="Tulisan Pesanmu..."
            {...register('message', { required: true })}
          />
          <InputRightElement w="4.5rem">
            <Button h="1.75rem" size="sm" type="submit" colorScheme="twitter">
              Kirim
            </Button>
          </InputRightElement>
        </InputGroup>
      ) : (
        <Stack justifyContent="start" direction={['column', 'row']} spacing={4}>
          <Button onClick={() => loginWith3rdParty('github')} fontWeight="normal">
            <Github mr={2} />
            Login dengan Github
          </Button>
          <Button onClick={() => loginWith3rdParty('google')} fontWeight="normal">
            <Google mr={2} />
            Login dengan Google
          </Button>
        </Stack>
      )}
    </Stack>
  );
}
