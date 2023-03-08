export default function Page() {
    return (
        <div className="py-12">
            <h2 className="text-2xl font-bold">Create Item</h2>
            <div className="mt-8 max-w-md">
                <div className="grid grid-cols-1 gap-6">
                    <label className="block">
                        <span className="text-gray-700">Full name</span>
                        <input type="text" className="custom-input" placeholder=""/>
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Email address</span>
                        <input type="email" className="custom-input" placeholder="john@example.com"/>
                    </label>
                    <label className="block">
                        <span className="text-gray-700">When is your event?</span>
                        <input type="date" className="custom-input"/>
                    </label>
                    <label className="block">
                        <span className="text-gray-700">What type of event is it?</span>
                        <select className="custom-input">
                            <option>Default</option>
                            <option></option>
                            <option>Birthday</option>
                            <option>Other</option>
                        </select>
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Additional details</span>
                        <textarea className="custom-input" rows={3}></textarea>
                    </label>
                </div>
            </div>
        </div>
    );
}