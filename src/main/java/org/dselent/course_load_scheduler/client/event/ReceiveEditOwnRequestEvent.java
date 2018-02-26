package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.ReceiveEditOwnRequestAction;
import org.dselent.course_load_scheduler.client.event_handler.ReceiveEditOwnRequestEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class ReceiveEditOwnRequestEvent extends GwtEvent<ReceiveEditOwnRequestEventHandler>{
	public static Type<ReceiveEditOwnRequestEventHandler> TYPE = new Type<ReceiveEditOwnRequestEventHandler>();
	
	private ReceiveEditOwnRequestAction action;
	
	public ReceiveEditOwnRequestEvent(ReceiveEditOwnRequestAction action)
	{
		this.action = action;
	}
	
	public ReceiveEditOwnRequestAction getAction()
	{
		return action;
	}
	
	@Override
	public Type<ReceiveEditOwnRequestEventHandler> getAssociatedType()
	{
		return TYPE;
	}


	@Override
	protected void dispatch(ReceiveEditOwnRequestEventHandler handler)
	{
		handler.onReceiveEditOwnRequest(this);
	}

}
