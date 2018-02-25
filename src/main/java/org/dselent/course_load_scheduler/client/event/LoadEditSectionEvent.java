package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.LoadEditSectionAction;
import org.dselent.course_load_scheduler.client.event_handler.LoadEditSectionEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class LoadEditSectionEvent extends GwtEvent<LoadEditSectionEventHandler>{
	public static Type<LoadEditSectionEventHandler> TYPE = new Type<LoadEditSectionEventHandler>();

	private LoadEditSectionAction action;

	public LoadEditSectionEvent(LoadEditSectionAction action)
	{
		this.action = action;
	}

	public LoadEditSectionAction getAction()
	{
		return action;
	}

	@Override
	public Type<LoadEditSectionEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	@Override
	protected void dispatch(LoadEditSectionEventHandler handler)
	{
		handler.onLoadEditSection(this);
	}

}
