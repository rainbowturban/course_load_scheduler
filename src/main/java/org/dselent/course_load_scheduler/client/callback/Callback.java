package org.dselent.course_load_scheduler.client.callback;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import org.dselent.course_load_scheduler.client.event_handler.EventHandlerAdapter;
import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.event.shared.SimpleEventBus;
import com.google.gwt.user.client.rpc.AsyncCallback;

public abstract class Callback<JSONValue> extends EventHandlerAdapter implements AsyncCallback<JSONValue>
{
	protected SimpleEventBus eventBus;
	protected Map<GwtEvent.Type<?>, HandlerRegistration> eventBusRegistration;
	
	public Callback(SimpleEventBus eventBus)
	{
		this.eventBus = eventBus;
		eventBusRegistration = new HashMap<>();
	}
	
	public void bind() {};

	public void unbind()
	{
		Set<GwtEvent.Type<?>> eventTypes = eventBusRegistration.keySet();
		Iterator<GwtEvent.Type<?>> iterator = eventTypes.iterator();
		
		while(iterator.hasNext())
		{
			eventBusRegistration.get(iterator.next()).removeHandler();
		}
	}
}