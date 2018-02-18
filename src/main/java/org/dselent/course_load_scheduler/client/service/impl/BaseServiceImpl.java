package org.dselent.course_load_scheduler.client.service.impl;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import org.dselent.course_load_scheduler.client.event_handler.EventHandlerAdapter;
import org.dselent.course_load_scheduler.client.service.BaseService;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.event.shared.SimpleEventBus;
import com.google.inject.Inject;

// Override methods in subclasses as necessary
public abstract class BaseServiceImpl extends EventHandlerAdapter implements BaseService
{
	// Field injection
	// Injected after the constructor is executed
	// Do not use in the constructors
	// Call bind after construction
	@Inject
	protected SimpleEventBus eventBus;
	
	protected Map<GwtEvent.Type<?>, HandlerRegistration> eventBusRegistration;
	
	public BaseServiceImpl()
	{
		eventBusRegistration = new HashMap<>();
	}
	
	@Override
	public void init(){};
		
	@Override
	public void bind() {};
	
	@Override
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