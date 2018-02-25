package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.ReceiveRemoveRequestAction;
import org.dselent.course_load_scheduler.client.event_handler.ReceiveRemoveRequestEventHandler;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.GwtEvent.Type;

public class ReceiveRemoveRequestEvent extends GwtEvent<ReceiveEditOwnRequestEventHandler>{
	public static Type<ReceiveEditOwnRequestEventHandler> TYPE = new Type<ReceiveEditOwnRequestEventHandler>();
	
	private ReceiveRemoveRequestAction action;
	
	public ReceiveRemoveRequestEvent(ReceiveRemoveRequestAction action)
	{
		this.action = action;
	}
	
	public ReceiveRemoveRequestAction getAction()
	{
		return action;
	}
	
	@Override
	public Type<ReceiveRemoveRequestEventHandler> getAssociatedType()
	{
		return TYPE;
	}


	@Override
	protected void dispatch(ReceiveRemoveRequestEventHandler handler)
	{
		handler.onReceiveRemoveRequest(this);
	}

}
