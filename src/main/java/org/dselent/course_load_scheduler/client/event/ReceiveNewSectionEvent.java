package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.ReceiveNewSectionAction;
import org.dselent.course_load_scheduler.client.event_handler.ReceiveNewSectionEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class ReceiveNewSectionEvent extends GwtEvent<ReceiveNewSectionEventHandler>{
	public static Type<ReceiveNewSectionEventHandler> TYPE = new Type<ReceiveNewSectionEventHandler>();
	
	private ReceiveNewSectionAction action;
	
	public ReceiveNewSectionEvent(ReceiveNewSectionAction action)
	{
		this.action = action;
	}
	
	public ReceiveNewSectionAction getAction()
	{
		return action;
	}
	
	@Override
	public Type<ReceiveNewSectionEventHandler> getAssociatedType()
	{
		return TYPE;
	}


	@Override
	protected void dispatch(ReceiveNewSectionEventHandler handler)
	{
		handler.onReceiveNewSection(this);
	}

}
