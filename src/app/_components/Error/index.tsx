interface ErrorField {
 error: string | undefined,
 touched: boolean | undefined,
} 

const ErrorField = ({ error, touched }: ErrorField) => {
 if (error && touched) {
   return <div className="text-red-700 text-xs">{error}</div>;
 }
 return <div />;
};

export default ErrorField;