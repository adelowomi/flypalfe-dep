import { useRouter } from 'next/router';
import Cancelled from './Cancelled';
import Delayed from './Delayed';
import Denied from './Denied';
import BaggageClaim from './BaggageClaim';
import Refund from './Refund';

function Second({
  register,
  errors,
  control,
}: {
  register: any;
  errors: any;
  control: any;
}) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      {id === '1' ? (
        <Cancelled register={register} errors={errors} control={control} />
      ) : id === '2' ? (
        <Delayed register={register} errors={errors} control={control} />
      ) : id === '3' ? (
        <Denied register={register} errors={errors} control={control} />
      ) : id === '4' ? (
        <BaggageClaim register={register} errors={errors} control={control} />
      ) : id === '5' ? (
        <Refund register={register} errors={errors} control={control} />
      ) : null}
    </>
  );
}

export default Second;
