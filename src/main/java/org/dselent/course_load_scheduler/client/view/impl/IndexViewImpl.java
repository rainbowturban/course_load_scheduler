package org.dselent.course_load_scheduler.client.view.impl;

import org.dselent.course_load_scheduler.client.presenter.IndexPresenter;
import org.dselent.course_load_scheduler.client.view.IndexView;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.PopupPanel;
import com.google.gwt.user.client.ui.Widget;

public class IndexViewImpl extends BaseViewImpl<IndexPresenter> implements IndexView
{
	private static IndexViewImplUiBinder uiBinder = GWT.create(IndexViewImplUiBinder.class);

	interface IndexViewImplUiBinder extends UiBinder<Widget, IndexViewImpl> {}
	
	@UiField
	HTMLPanel mainPanel;
	
	@UiField
	Image loadingImage;
	
	@UiField
	PopupPanel glassLoadingPanel;
	
	public IndexViewImpl()
	{
		initWidget(uiBinder.createAndBindUi(this));
	}

	@Override
	public HTMLPanel getMainPanel()
	{
		return mainPanel;
	}

	@Override
	public void setMainPanel(HTMLPanel mainPanel)
	{
		this.mainPanel = mainPanel;
	}

	@Override
	public void setPresenter(IndexPresenter presenter)
	{
		this.presenter = presenter;
	}
	
	@Override
	public PopupPanel getGlassLoadingPanel()
	{
		return glassLoadingPanel;
	}
	
	@Override
	public Image getLoadingImage()
	{
		return loadingImage;
	}
	
	@Override
	public Widget getWidgetContainer()
	{
		return this;
	}
	
	@Override
	public HasWidgets getViewRootPanel()
	{
		return mainPanel;
	}

}
